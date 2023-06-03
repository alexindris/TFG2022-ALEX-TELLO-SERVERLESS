pipeline {
  agent any
  stages {
    stage('List') {
      parallel {
        stage('List') {
          steps {
            echo 'Listing files'
          }
        }

        stage('') {
          steps {
            sh 'ls -la'
          }
        }

      }
    }

  }
}