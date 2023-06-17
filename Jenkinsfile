pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '-p 3000:3000'
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
        withSonarQubeEnv 'SonarQubeScanner'
      }
    }

  }
}