gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

gsap.to("#loading-overlay", {
  y: "100%",
  delay: 2,
  duration: 0.5,
  ease: "power.inOut",
});

const FFS = document.getElementById('FFS');
FFS.innerHTML = `<div class="modal-dialog modal-lg" role="document">
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

const FSS = document.getElementById('FSS');
FSS.innerHTML = `<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Fire Suppression System</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body center-content">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/5.jpg' alt='Hydrant System'>
              <figcaption>Hydrant System</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/6.jpg' alt='Hydrant System'>
              <figcaption>Hydrant System</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/7.jpg' alt='MVWS'>
              <figcaption>MVWS</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/8.jpg' alt='Watermist'>
              <figcaption>Watermist</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/9.jpg' alt='Watermist'>
              <figcaption>Watermist</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/10.jpg' alt='FM200 &amp; Novec gas suppression system'>
              <figcaption>FM200 &amp; Novec gas suppression system</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>`;

const FAS = document.getElementById('FAS');
FAS.innerHTML = `<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Fire Alarm System</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body center-content">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/10.jpg' alt='Hydrant System'>
              <figcaption>Hydrant System</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <figure>
              <img src='/assets/12.jpg' alt='Hydrant System'>
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

const RHT = document.getElementById('RHT');
RHT.innerHTML = `<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Refilling & Hydro Test Service</h5>
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

const AMS = document.getElementById('AMS');
AMS.innerHTML = `<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Annual Maintenance Service</h5>
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
