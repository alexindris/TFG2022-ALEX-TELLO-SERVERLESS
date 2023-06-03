pipeline {
  agent any
  stages {
    stage('List') {
      parallel {
        stage('List Message') {
          steps {
            echo 'Listing files'
          }
        }

        stage('List all files') {
          steps {
            sh 'ls -la'
          }
        }

      }
    }

  }
}