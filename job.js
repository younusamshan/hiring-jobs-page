
let fetchRes = fetch('https://backend-prod.app.hiringmine.com/api/categories/all')

fetchRes.then(res => 
    res.json()).then(d => {
        
        // console.log(d);
        let cardBody = document.getElementById('cardBody')
        // console.log(d);
        let fetchData = d.data.forEach((valu, index ) => {
            console.log(valu)
            // let div = document.createElement('div')
cardBody.innerHTML += `
 
  <div class="col-sm-12  col-md-6 col-lg-4">
                    <div class="card" style="width: auto;">
                        <div class="card-body">
                            <h6 class="card-title">
                                <div class="d-flex justify-content-between">

                                    <p class="one-p">Anonymous</p>
                                    <p>
                                        <img src="assete/three-card-logo.png" width="50px" class="ms-auto img-fluid"
                                            alt="" srcset="">
                                    </p>
                                </div>

                                <p class=" two-p">Full Stack Developer (React and Django)</p>
                                <p class="card-link three-p">No Salary Mentioned</p>
                            </h6>
                            <h6 class=" mb-2  four-p">
                                We are seeking a Full Stack Developer (React with Django) for a Hybrid position
                                (Karachi).
                            </h6>
                            <p class="card-text five-p">It's a full-time Hybrid position for our Australian-based
                                client..</p>
                            <a href="#" class="btn btn-danger six-btn">Hybrid</a>
                            <div class="d-flex siven-p justify-content-between">
                                <p>16 houres ago</p>
                                <p>111 views</p>
                            </div>
                        </div>
                    </div>
                </div>
`
// cardBody.appendChild(div)
// console.log(cardBody);

console.log(cardBody);
      })
    })