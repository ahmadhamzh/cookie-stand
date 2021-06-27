"use strict"

let Seattle = {
    MinCust : 23,
    MaxCust : 65,
    AvgCookie : 6.3,
    CustPerHour : [],
    CookiePerHour : [],
    GetCust : function(){
        this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
    },
    GetCookie : function(){
        this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
    },
   

};
console.log(Seattle)
console.log(Seattle.GetCust())
console.log(Seattle.GetCookie())

let Tokyo = {
    MinCust : 3,
    MaxCust : 24,
    AvgCookie : 1.2,
    CustPerHour : [],
    CookiePerHour : [],
    GetCust : function(){
        this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
    },
    GetCookie : function(){
        this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
    },
    
}
console.log(Tokyo)
console.log(Tokyo.GetCust())
console.log(Tokyo.GetCookie())


let Dubai = {
    MinCust : 11,
    MaxCust : 38,
            AvgCookie : 3.7,
            CustPerHour : [],
            CookiePerHour : [],
            GetCust : function(){
                this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
            },
            GetCookie : function(){
                this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
            },
            
        }
        console.log(Dubai)
        console.log(Dubai.GetCust())
        console.log(Dubai.GetCookie())
        
        
        
        let Paris = {
            MinCust : 20,
            MaxCust : 38,
            AvgCookie : 2.3,
            CustPerHour : [],
            CookiePerHour : [],
            GetCust : function(){
                this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
            },
            GetCookie : function(){
                this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
            },         
        }
        console.log(Paris)
        console.log(Paris.GetCust())
        console.log(Paris.GetCookie())
        
        
        let Lima = {
            MinCust : 2,
            MaxCust : 16,
            AvgCookie : 4.6,
            CustPerHour : [],
            CookiePerHour : [],
            GetCust : function(){
                this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
            },
            GetCookie : function(){
                this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
            }, 
            
        }
        console.log(Lima)
        console.log(Lima.GetCust())
        console.log(Lima.GetCookie())
                
                
                
                
           
    function NumOfCust (min,max,avg){
               let cust = []
               let cookies = []  
     for (let i = 0; i < 14; i++) {
         
         cust.push(Math.floor(Math.random() *(max - min +1)+min));

         cookies.push(Math.floor(cust[i]*avg));
         
         
        }
        return [cust,cookies]
    }
   
    NumOfCust();




let parents = document.getElementById('BranchesSales');
let branch1 = document.createElement('h1');
parents.appendChild(branch1);
branch1.textContent = 'Seattle branch';
let SeattleUl = document.createElement('ul');
parents.appendChild(SeattleUl);
SeattleUl.textContent = 'mount of sold';


    
    
    let SeattleList = document.createElement('li') 
    SeattleUl.appendChild(SeattleList);


    for (let i = 0; i < 14; i++) {
        let SeattleLi = document.createElement('li');
        SeattleUl.appendChild(SeattleLi);
        
        if ((i+6) <= 12) {
            
            SeattleLi.textContent =  (i+6)+ ':00 am ' +Seattle.CookiePerHour[i]+ ' cookies'; 
        } else{
            
            SeattleLi.textContent =  (i-6)+ ':00 pm ' +Seattle.CookiePerHour[i]+ ' cookies'; 
        }
    }
    function sum (MyArray){
        let sum =0

        for (let i = 0; i < MyArray.length; i++) {
            sum += MyArray[i]
        }
        return sum
    }
console.log(sum(Seattle.CookiePerHour))
let SeattleLi = document.createElement('li');
SeattleUl.appendChild(SeattleLi);
SeattleLi.textContent = 'Total : ' +sum(Seattle.CookiePerHour)+' coockies';







    let branch2 = document.createElement('h1');
parents.appendChild(branch2);
branch2.textContent = 'Tokyo branch';
let TokyoUl = document.createElement('ul');
parents.appendChild(TokyoUl);
TokyoUl.textContent = 'mount of sold';
        
    let TokyoList = document.createElement('li') 
    TokyoUl.appendChild(TokyoList);


    for (let i = 0; i < 14; i++) {
        let TokyoLi = document.createElement('li');
        TokyoUl.appendChild(TokyoLi);
        
        if ((i+6) <= 12) {
            
            TokyoLi.textContent =  (i+6)+ ':00 am ' +Tokyo.CookiePerHour[i]+ ' cookies'; 
        } else{
            
            TokyoLi.textContent =  (i-6)+ ':00 pm ' +Tokyo.CookiePerHour[i]+ ' cookies'; 
        }
    }


let TokyoLi = document.createElement('li');
TokyoUl.appendChild(TokyoLi);
TokyoLi.textContent = 'Total : ' +sum(Tokyo.CookiePerHour)+' coockies';











    
    let branch3 = document.createElement('h1');
parents.appendChild(branch3);
branch3.textContent = 'Dubai branch';
let DubaiUl = document.createElement('ul');
parents.appendChild(DubaiUl);
DubaiUl.textContent = 'mount of sold';


    
    
    let DubaiList = document.createElement('li') 
    DubaiUl.appendChild(DubaiList);


    for (let i = 0; i < 14; i++) {
        let DubaiLi = document.createElement('li');
        DubaiUl.appendChild(DubaiLi);
        
        if ((i+6) <= 12) {
            
            DubaiLi.textContent =  (i+6)+ ':00 am ' +Dubai.CookiePerHour[i]+ ' cookies'; 
        } else{
            
            DubaiLi.textContent =  (i-6)+ ':00 pm ' +Dubai.CookiePerHour[i]+ ' cookies'; 
        }
    }
       let DubaiLi = document.createElement('li');
       DubaiUl.appendChild(DubaiLi);
       DubaiLi.textContent = 'Total : ' +sum(Dubai.CookiePerHour)+' coockies';










    let branch4 = document.createElement('h1');
    parents.appendChild(branch4);
    branch4.textContent = 'Paris branch';
    let ParisUl = document.createElement('ul');
    parents.appendChild(ParisUl);
    ParisUl.textContent = 'mount of sold';
    
    
        
        
        let ParisList = document.createElement('li') 
        ParisUl.appendChild(ParisList);
    
    
        for (let i = 0; i < 14; i++) {
            let ParisLi = document.createElement('li');
            ParisUl.appendChild(ParisLi);
            
            if ((i+6) <= 12) {
                
                ParisLi.textContent =  (i+6)+ ':00 am ' +Paris.CookiePerHour[i]+ ' cookies'; 
            } else{
                
                ParisLi.textContent =  (i-6)+ ':00 pm ' +Paris.CookiePerHour[i]+ ' cookies'; 
            }
        }

        let ParisLi = document.createElement('li');
       ParisUl.appendChild(ParisLi);
       ParisLi.textContent = 'Total : ' +sum(Paris.CookiePerHour)+' coockies';










        let branch5 = document.createElement('h1');
        parents.appendChild(branch5);
        branch5.textContent = 'Lima branch';
        let LimaUl = document.createElement('ul');
        parents.appendChild(LimaUl);
        LimaUl.textContent = 'mount of sold';
                  
            
            let LimaList = document.createElement('li') 
            LimaUl.appendChild(LimaList);
        
        
            for (let i = 0; i < 14; i++) {
                let LimaLi = document.createElement('li');
                LimaUl.appendChild(LimaLi);
                
                if ((i+6) <= 12) {

                    LimaLi.textContent =  (i+6)+ ':00 am ' +Lima.CookiePerHour[i]+ ' cookies';
                    
                } else{
                    
                    LimaLi.textContent =  (i-6)+ ':00 pm ' +Lima.CookiePerHour[i]+ ' cookies'; 
                }
            }

            let LimaLi = document.createElement('li');
            LimaUl.appendChild(LimaLi);
            LimaLi.textContent = 'Total : ' +sum(Lima.CookiePerHour)+' coockies';





    
    

