!/bin/bash

echo "Starting server..."

activeContainers=`docker ps | wc -l`

if [ $activeContainers -gt 1 ]
then
    echo "Shutting down active containers..."
    docker-compose -f deployment.yml down
    echo "Restarting containers with updated images..."
    docker-compose -f deployment.yml up -d --build
else
    echo "No containers running. Starting containers..."
    docker-compose -f deployment.yml up -d --build
fi

echo "Containers started succesfully"