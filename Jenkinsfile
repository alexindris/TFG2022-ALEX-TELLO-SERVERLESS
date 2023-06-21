pipeline {
  agent {
    docker {
      image 'timbru31/java-node:alpine-jre-hydrogen'
      args '-p 3000:3000 --net=tfm_tfm-network'
    }

  }
  stages {
    stage('Dependency Check') {
      steps {
          script {
            def statusCode = sh "npm audit > audit_output.json", returnStatus:true
            if (statusCode != 0) {
              error "Pipeline aborted due vulnerabilities found"
            }
        }
        archiveArtifacts artifacts: 'audit_output.json', fingerprint: true
      }
    }

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

  }
}