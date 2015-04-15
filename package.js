Package.describe({
  summary: "Insert multiple documents to mongo collection with one db call.",
  version: "1.1.9",
  name: "mikowals:batch-insert",
  git: "https://github.com/mikowals/batch-insert.git"
});

Npm.depends({
  mongodb: "https://github.com/meteor/node-mongodb-native/tarball/634759e6326dc19a228df66ddb309285532f3b8a"
});

Npm.strip({
  mongodb: ["test/"]
});

Package.onUse( function( api ) {
  api.versionsFrom('METEOR@1.0.4.1');
  api.use(['mongo', 'ddp','ejson','underscore']);
  api.use('insecure', {weak: true});
  api.imply(['mongo', 'ddp']);
  api.addFiles('batch-insert-server.js','server');
  api.addFiles('batch-insert-common.js');
});

Package.onTest( function( api ) {
  api.use(['tinytest','test-helpers', 'random', 'mongo']);
  api.use('mikowals:batch-insert');
  api.addFiles('batch-insert-tests.js');
});
