import request from 'request';

/**
 *
 * @param baseUrl
 * @constructor
 */
function ImpChannelManagerClient(baseUrl){
  this.baseUrl = baseUrl;
}

ImpChannelManagerClient.prototype = {
  /**
   *
   * @param pmcId
   * @param listingType
   * @returns {Promise}
   */
  getChannelsByPropertyAndType: function(pmcId, listingType){
    let baseUrl = this.baseUrl;
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: baseUrl + `/${pmcId}/${listingType}`
      }, (error, response, body) => {
        if (error) {
          reject(error);
        }
        try {
          body = JSON.parse(body);
        } catch (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }
};

/**
 *
 * @param baseUrl
 * @returns {ImpChannelManagerClient}
 */
export let createChannelManagerClient = (baseUrl)=>{
  return new ImpChannelManagerClient(baseUrl);
};
