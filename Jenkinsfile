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
      steps {
          'Lint Frontend': {
            sh 'npm run lint -w frontend'
          },
          'Lint Backend': {
            sh 'npm run lint -w backend'
          }
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
