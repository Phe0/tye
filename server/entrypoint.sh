#!/bin/bash
set -e
cmd="$@"

export REDIS_URL=redis://redis:6379

# the official postgres image uses 'postgres' as default user if not set explictly.
if [ -z "$POSTGRES_USER" ]; then
    export POSTGRES_USER=postgres
fi

export DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/$POSTGRES_USER


function postgres_ready(){
node << END
var postgres = require("pg");
var client = new postgres.Client({
  user: '$POSTGRES_USER',
  password: '$POSTGRES_PASSWORD',
  database: '$POSTGRES_USER',
  port: 5432,
  host: 'postgres',
});
client.connect(function(err) {
  if (err) {
    console.log('connection failed');
    console.error(err);
    process.exit(1);
  }
  console.log('connection successful');
  process.exit(0);
});
END
}

until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - continuing..."
exec $cmd