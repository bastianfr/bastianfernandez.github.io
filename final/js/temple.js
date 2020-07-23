let url = 'JSON/temples.json';


fetch(url)
    .then( response => response.json() )
    .then( data => {


        let temples = data.temples;
        let  closed = "";
        let i=0;
        let sd = "";
        let sg = "";
        let sp = "";
        let p = "";
        for (temple of temples){
            if (temple.name == "San Diego"){
                closed = temple.closed;
                i = 0;
                for (clos of closed){
                    sd += `<p>${closed[i]}</p>`;
                    i++;
                }
            }
            else if (temple.name == "Sao Paulo"){
                closed = temple.closed;
                i = 0;
                for (clos of closed){
                    sp += `<p>${closed[i]}</p>`;
                    i ++;
                }
            }
            else if (temple.name == "St. George"){
                closed = temple.closed;
                i = 0;
                for (clos of closed){
                    sg += `<p>${closed[i]}</p>`;
                    i++;
                }
            }
            else {
                closed = temple.closed;
                i = 0;
                for (clos of closed){
                    p += `<p>${closed[i]}</p>`;
                    i++;
                }
            }
        }

        document.getElementById('san_diego').innerHTML = sd;
        document.getElementById('paris').innerHTML = p;
        document.getElementById('sao_paulo').innerHTML = sp;
        document.getElementById('st_george').innerHTML = sg;


    });