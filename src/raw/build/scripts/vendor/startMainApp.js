function setButtonUrl(){var additionalUrl=window.location.href.split("#")[1];if(additionalUrl)var url="/embedded.html#"+additionalUrl;else var url="/embedded.html";$("#btnSwitchView").attr("href",url)}embedHashPersistencePlugin(Notebook),new Notebook(document.body,{inject:["plugins/proxy.js","plugins/chai.js","plugins/filter-properties.js","plugins/raml-client-generator.js","plugins/function-property-filter.js","plugins/custom-location-persistence.js","plugins/jquery.js"],exec:["App.middleware.register(proxyPlugin);","App.middleware.register(customLocationPersistencePlugin);","App.middleware.register(filterPropertiesPlugin);","App.middleware.register(ramlClientGeneratorPlugin);","App.middleware.register(functionPropertyFilterPlugin);","App.middleware.register(chaiPlugin);","App.middleware.register(jqueryPlugin);"].join("\n"),config:{embedded:!1}},{minHeight:"100%"}),"127.0.0.1"===window.parent.location.hostname&&($("#btnSwitchViewContainer").removeClass("hidden"),$(document).ready(function(){setButtonUrl(),window.onhashchange=setButtonUrl}));