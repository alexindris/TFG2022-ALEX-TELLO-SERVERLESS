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
        npm install
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}