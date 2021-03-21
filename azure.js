const azureStorage = require('azure-storage')
const uuid = require('uuid')

let queryTableName = '';
const suggestTableName = 'webAppListSuggest';

const tableSvc = azureStorage.createTableService(
    'privateedgepwa', // 'myaccount',
    'jbjSDvVyFxOqJuGDpqUmu9RDLklKDpVMYElaTYXd/mIEUfK+n1htXCdpeX41MA7FjmbV15T1Wt2imzRHdMR+2w=='); // 'myaccesskey');

if (!tableSvc) {
  console.log('azureStorage.createTableService failed');
}

const query_async = (table, particianKey) => {
  return new Promise( (resolve, reject) => {

    queryTableName = table || 'webAppList';
    const particianKeyes = particianKey || 'all';

    let querySyntax = null;
    if (particianKeyes === 'all') {
      querySyntax = new azureStorage.TableQuery()
      .select(['*']);
    } else {
      querySyntax = new azureStorage.TableQuery()
        .select(['*'])
        .where('PartitionKey eq ?', particianKeyes);
    }

    tableSvc.queryEntities(queryTableName, querySyntax, null,
      (error, result, response) => {
      if(error) {
        // query was successful
        console.log('queryEntities call failed');
        reject('azureStorage query rejected')
      } else {
        console.log('queryEntities succeeded');
        resolve(result);
      }
    });
  });
}

const query = (table, particianKey) => {
  const myPromise = new Promise((resolve, reject) => {
    query_async(table, particianKey).then((result) => {
      resolve(result);
    }).catch((error) => {
      reject(error);
    });
  });

  return myPromise;
}

function add(suggested_url, webapp_kind) {
  let partition_key = '';
  switch (webapp_kind) {
    case 'Desktop PWA':
      partition_key = 'desktopPwa';
      break;
    case 'Windows Store':
      partition_key = 'windowsStore';
      break;
    case 'Installed Site':
    default:
      partition_key = 'installedSite';
      break;
  }

  var task = {
    PartitionKey: {'_': partition_key},
    RowKey: {'_': uuid.v4()},
    Url: {'_': suggested_url},
  };

  tableSvc.insertEntity(suggestTableName, task, (error, result, response) => {
    if(error){
      // Entity inserted
      console.log('entry insertion failed');
    } else {
      console.log('entry inserted');
    }
  });
}

// function del(url) {
//   const result = query(url);
//   if (!result) {
//     "no entry found";
//     return;
//   }

//   var task = {
//     PartitionKey: {'_':result.PartitionKey},
//     RowKey: {'_': result.RowKey}
//   }

//   tableSvc.deleteEntity('myTestOne', task, (error, response) => {
//     if (error) {
//       // Entity inserted
//       console.log('entry deletion failed');
//     } else {
//       console.log('entry deleted');
//     }
//   });
// }

exports.query = query;
exports.add = add;
