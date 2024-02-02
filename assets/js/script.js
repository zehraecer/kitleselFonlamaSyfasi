const btn = document.querySelector(".btp")





function getPage(){
    btn.addEventListener("click",function(){
        
        const body = document.querySelector(".bla")
        body.innerHTML=`
        <div class="kutu3-1" >
        <div class="kutu3-1-ust">
          <h2>Bamboo Stand</h2>
          <h3>Pledge $25 or more</h3>
        </div>
      <h5>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</h5>
      <div class="kutu3-1-alt">
          <div class="kutu3-1-alt-SOL">
            <h2>101</h2>
            <h6>left</h6>
          </div>
          <button>Select Reward</button>
      </div>
      </div>

     <div class="kutu3-1">
        <div class="kutu3-1-ust">
           <h2>Black Edition Stand</h2>
           <h3>Pledge $75 or more</h3>
        </div>
        <h5>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</h5>
        <div class="kutu3-1-alt">
            <div class="kutu3-1-alt-SOL">
              <h2>64</h2>
              <h6>left</h6>
            </div>
            <button>Select Reward</button>
        </div>
      </div>

      <div class="kutu3-1 kutu3-2">
         <div class="kutu3-1-ust2">
           <h2>Mahogany Special Edition</h2>
           <h3>Pledge $200 or more</h3>
          </div>
          <h5>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</h5>
          <div class="kutu3-1-alt">
              <div class="kutu3-1-alt-SOL">
                <h2>0</h2>
                <h6>left</h6>
              </div>
              <button>Out of stock</button>
          </div>
      </div>

`
        console.log(btn);
    })
}
getPage();