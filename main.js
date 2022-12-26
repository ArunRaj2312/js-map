let markSheet=[{name:"Arun",tamil:98,english:56,maths:78,science:89,social:66},
                {name:"Arun",tamil:88,english:76,maths:73,science:99,social:86},
                {name:"Arun",tamil:93,english:69,maths:98,science:69,social:96}];
    let value=markSheet.map(function(value1){
        return value1.tamil;
    })
    console.log(value)
