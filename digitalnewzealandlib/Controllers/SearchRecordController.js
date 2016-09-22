/**
  *DigitalNewzealandLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/22/2016
  */

'use strict';
angular.module('DigitalNewzealandLib').factory('SearchRecordController',function($q,Configuration,HttpClient,APIHelper,CollectionSearchRecords){
    return{
        /**
         * The Search Records API call returns a result set in response to a search query. The v3 Search Records API request parameters and response format differs significantly from the deprecated v1 & v2 Search Records API call.
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} text    Required parameter: Example: 
         *     {string|null} and    Optional parameter: Restricts search to records matching all facet values. Example: "&and[content_partner][]=Kete+Horowhenua&and[category][]=Images"
         *     {string|null} or    Optional parameter: Restricts search to records matching any of the specified facet values. Example: "&or[category][]=Image&or[category][]=Videos"without
         *     {string|null} without    Optional parameter: Restricts search to records that don't match any of the facet values. Example: "&without[category][]=Newspapers"
         *     {int|null} page    Optional parameter: the page when iterating over a set of records. (Defaults to 1.)
         *     {int|null} perPage    Optional parameter: the number of records the user wishes returned up to a maximum of 100. (Defaults to 20.)
         *     {string|null} facets    Optional parameter: a list of facet fields to include in the output. See the note on facets below for more information. Example: "&facets=year,category"
         *     {int|null} facetsPage    Optional parameter: the facet page to iterate over a set of facets. . (Defaults to 1.)
         *     {int|null} facetPerPage    Optional parameter: the number of facets returned for every page. (Defaults to 10.)
         *     {string|null} sort    Optional parameter: the field upon which results are sorted. Defaults to relevance sorting. The sort field must be one of: "category", "content_partner", "date", "syndication_date".
         *     {string|null} direction    Optional parameter: the direction in which the results are sorted. Possible values: "desc", "asc".
         *     {double|null} geoBbox    Optional parameter: a geographic bounding box scoping a search to a geographic region. Order of latitude-longitude coordinates is north, west, south, east. For example, &geo_bbox=-41,174,-42,175 searches the Wellington region.
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<CollectionSearchRecords>}
         */
        searchRecord : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v3/records.json";
            
            //Process query parameters
            _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                "text" : input.text,
                "and" : input.and,
                "or" : input.or,
                "without" : input.without,
                "page" : (null != input.page)? input.page: 1,
                "per_page" : (null != input.perPage)? input.perPage: 20,
                "facets" : input.facets,
                "facets_page" : (null != input.facetsPage)? input.facetsPage: 1,
                "facet_per_page" : (null != input.facetPerPage)? input.facetPerPage: 10,
                "sort" : input.sort,
                "direction" : input.direction,
                "geo_bbox" : input.geoBbox,
                "api_key" : Configuration.apiKey
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _strResult =_result.body;
            	_result = new CollectionSearchRecords(_strResult);
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});