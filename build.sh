#!/bin/bash
## This file representes actually the agent of the deployment as Jenkins 
# export APP_NAME=<YOUR_APPL_DIRECTORY_NAME>
export APP_NAME=TNGR_APP
export CICD_PROJECT_BRANCH_NAME=develop
export CICD_PROJECT_DIR=CICD_TNGR_APP
export CICD_PROJECT_REPO=git@github.com:mblal/TNGR_APP_CIDC.git
#@TODO The line below is not a good way, try to find how to get automatically in a specific submodule branch or tag
export CICD_BRANCH=master
export TARGET_ENV=rec
git clone --recurse-submodules --branch $CICD_PROJECT_BRANCH_NAME $CICD_PROJECT_REPO $CICD_PROJECT_DIR
cd $CICD_PROJECT_DIR
#@TODO The Three lines below are to delete, try to find how to get automatically in a specific submodule branch or tag
cd CICD
git checkout $CICD_BRANCH
cd ..

exec ./CICD/bootstrap.sh paas build
