async  function fetchResourse(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

  //const tempCelcius= result.Metadata.Symbol;
 console.log(result.Metadata.Interval);
    } catch (error) {
        console.error(error);
        
    // }finally{
    //     console.log("operation finished");
    // }
}}
fetchResourse("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")