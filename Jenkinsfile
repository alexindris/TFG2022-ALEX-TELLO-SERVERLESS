pipeline {
  agent {
    docker {
      image 'timbru31/java-node:alpine-jre-hydrogen'
      args '--net=tfm_tfm-network'
    }

  }
  stages {
    stage('Preparation') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      parallel {
        stage('Lint Frontend') {
          steps {
            sh 'npm run lint -w frontend'
          }
        }

        stage('Lint Backend') {
          steps {
            sh 'npm run lint -w backend'
          }
        }

      }
    }

    stage('Test') {
      parallel {
        stage('Test Frontend') {
          steps {
            sh 'npm run test:cov -w frontend'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Static Code Analysis') {
      steps {
        sh 'wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472.zip'
        sh 'unzip sonar-scanner-cli-4.6.2.2472.zip'
        sh 'mv sonar-scanner-4.6.2.2472 /opt/sonar-scanner'
        withSonarQubeEnv('SonarQubeScanner') {
          sh '/opt/sonar-scanner/bin/sonar-scanner'
        }

      }
    }

    stage('Quality Gate') {
      steps {
        timeout(time: 1, unit: 'HOURS') {
          script {
            def qg = waitForQualityGate()
            if (qg.status != 'OK') {
              error "Pipeline aborted due to quality gate failure: ${qg.status}"
            }
          }

        }

      }
    }

    stage('Dependency Check') {
      steps {
         sh '''
              npm audit
              if [ $? -ne 0 ]; then
                exit 1
              fi
            '''
      }
    }
    stage('Deploy') {
      steps {
        withCredentials(bindings: [
                      string(credentialsId:'AWS_ACCESS_KEY_ID', variable: 'AWS_ACCESS_KEY_ID'),
                      string(credentialsId:'AWS_SECRET_ACCESS_KEY',variable:'AWS_SECRET_ACCESS_KEY')
                    ]) {
            sh 'apk add --no-cache aws-cli'
            sh 'aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID'
            sh 'aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY'
            sh 'npm run deploy -- --stage dev'
          }

         }
      }

      stage('Dynamic Code Analysis') {
        steps {
          build(job: 'OWASP_Zap',
          parameters: [
            string(name: 'TARGET', value: 'https://petam.io'), // This url should be dynamic and not hardcoded for multiple environments
            string(name: 'SCAN_TYPE', value: 'Full')
          ]
          , wait: true, propagate: true)
        }
      }

    }
  }
