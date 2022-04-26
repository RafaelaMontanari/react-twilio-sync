function request (anotationTitle, anotation) {
  const accountSid = 'AC71230577c4c3fcffaf94a923d26556c6';
  const authToken = 'bc87729c0aab94733a126e6449fdda4c';
  const client = require('twilio')(accountSid, authToken);

  client.sync.services('IS13c307b864999ec2fd76068a0b53825b')
    .syncMaps('MP6b1cde8237674a62bac02245464d7367')
    .syncMapItems
    .create({
      key: anotationTitle,
      data: {
        anotation: anotation,
      }
    })
    .then(sync_map_item => console.log(sync_map_item.key));
}

request("anotationTitle", "anotation")

//export default request;