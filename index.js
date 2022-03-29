class Group {
    constructor() {
      this.members = [];
    }
  
    getGroup() {
      return this;
    }
  
    addMembers(m) {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].name == m) {
          console.log("Member name should be unique");
          return;
        }
      }
      this.members = [...this.members, { name: m, exp: 0, cont: 0 }];
    }
  
    setExpenses(name, amt) {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].name == name) {
          this.members[i].cont = amt;
          return;
        }
      }
      console.log("Give a valid member name");
      return;
    }
  
    showExpenses() {
      let s = 0;
      this.members.map((a) => {
        s = s + a.cont;
      });
      this.members.map((a) => {
        a.exp = s / this.members.length;
      });
      let arr = this.members.sort((a, b) => {
        if (a.cont > b.cont) {
          return -1;
        }
        if (a.vont < b.cont) {
          return 1;
        }
        return 0;
      });
      let n = 0;
      let data = {};
      if(data=={}){
          "Bill setteled"
          return
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].cont > arr[i].exp) {
          data[arr[i].name] = arr[i].cont - arr[i].exp;
        }
      }
      for (let i = 0; i < this.members.length; i++) {
        if (
          this.members[i].exp > this.members[i].cont ||
          this.members[i].exp == 0
        ) {
          console.log(
            this.members[i].name +
              ":" +
              (this.members[i].exp - this.members[i].cont)
          );
        }
      }
    }
  }
  
  let Aditya = new Group();
  
  
  
  Aditya.addMembers("member1");
  
  
  
  Aditya.addMembers("member2");
  
  Aditya.addMembers("member3");
  
  Aditya.setExpenses("member1", 30);
  
  Aditya.setExpenses("member2", 30);
  Aditya.setExpenses("member3", 30);
  Aditya.showExpenses();
  console.log(Aditya)
  