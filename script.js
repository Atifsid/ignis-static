gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

gsap.to("#loading-overlay", {
  y: "100%",
  delay: 2,
  duration: 0.5,
  ease: "power.inOut",
});

const ffs = document.getElementById('FFS');
ffs.innerHTML = `<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Fire Fighting System</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body center-content">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/0.jpg' alt='Hydrant System'>
              <figcaption>Hydrant System</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/1.jpg' alt='Hydrant System'>
              <figcaption>Hydrant System</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/2.jpg' alt='MVWS'>
              <figcaption>MVWS</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/3.jpg' alt='Watermist'>
              <figcaption>Watermist</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/4.jpg' alt='Watermist'>
              <figcaption>Watermist</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/5.jpg' alt='FM200 &amp; Novec gas suppression system'>
              <figcaption>FM200 &amp; Novec gas suppression system</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>`;