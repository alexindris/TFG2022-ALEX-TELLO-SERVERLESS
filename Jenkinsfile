pipeline {
  agent {
    docker {
      image 'timbru31/java-node:alpine-jre-hydrogen'
      args '-p 3000:3000 --net=tfm-network'
    }

  }
  stages {
    // stage('Preparation') {
    //   steps {
    //     sh 'npm install'
    //   }
    // }

    // stage('Lint') {
    //   parallel {
    //     stage('Lint Frontend') {
    //       steps {
    //         sh 'npm run lint -w frontend'
    //       }
    //     }

    //     stage('Lint Backend') {
    //       steps {
    //         sh 'npm run lint -w backend'
    //       }
    //     }

    //   }
    // }

    // stage('Test') {
    //   parallel {
    //     stage('Test Frontend') {
    //       steps {
    //         sh 'npm run test:cov -w frontend'
    //       }
    //     }

    //   }
    // }

    // stage('Build') {
    //   steps {
    //     sh 'npm run build'
    //   }
    // }



    stage('Static Code Analysis') {
      steps {
        sh 'wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472.zip'
        sh 'unzip sonar-scanner-cli-4.6.2.2472.zip'
        sh 'mv sonar-scanner-4.6.2.2472 /opt/sonar-scanner'
        sh 'sleep 500'
        withSonarQubeEnv ('SonarQubeScanner') {
            sh "/opt/sonar-scanner/bin/sonar-scanner"

        }
      }
    }

  }
}