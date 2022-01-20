import DiscoverItem from '../../molecules/DiscoverItem';

export default function DiscoverMovies() {
  return (
    <div className="section-discover container-xxxl mt-5">
      <div className="mb-4">
        <h2 className="fw-bold">Discover</h2>
      </div>
      <div className="discover-wrapper scroll-wrapper pb-5">
        <DiscoverItem id={597895} />
        <DiscoverItem id={619296} />
        <DiscoverItem id={508941} />
        <DiscoverItem id={588227} />
        <DiscoverItem id={635532} />
        <DiscoverItem id={525661} />
      </div>
    </div>
  );
}
