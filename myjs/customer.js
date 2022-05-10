var customer={};


customer={
    id:1,
    name:'11',
    email:'22',
    pwd:'33',
    tel:'44',
    order:['iphone','samgsong','oppo'],
    level:3,
    showinfo:function(){
        var order="";
        for(i=0;i<this.order.length;i++){
            if(i<this.order.length-1)
                order += this.order[i] + '| ';
            else
            order += this.order[i] ;
        }

        var info="aaaaa:" + this.id + "<br>" 
                +"bbbbb:" + this.name + "<br>" 
                +"cccc:" + this.email + "<br>" 
                +"dddd:" + this.pwd + "<br>" 
                +"eeee:" + this.tel + "<br>" 
                +"fff:" + order + "<br>" 
                +"ggggg:" + this.level + "<br>" ;

        return info;
    }
}

console.log(customer);