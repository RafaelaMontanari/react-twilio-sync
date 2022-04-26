import axios from 'axios';
import { Buffer } from 'buffer'
//const rp = require("request-promise");

const accountSid = 'AC7...';
const authToken = '...';
const base64Token = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

const api = axios.create ({
    method: "POST",
      url: "https://sync.twilio.com/v1/Services/IS13c307b864999ec2fd76068a0b53825b/Maps/MP6b1cde8237674a62bac02245464d7367/Items/",
      headers: {
        Authorization: `Basic ${base64Token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      Data: {"name": "Foo Bar","level": 30,"username": "foo_bar"}
})
      
export default api;