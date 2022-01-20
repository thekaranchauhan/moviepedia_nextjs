import DiscoverItem from '../../molecules/DiscoverItem';

export default function DiscoverMovies() {
  return (
    <div className="section-discover container-xxxl mt-5">
      <div className="mb-4">
        <h2 className="fw-bold">Discover</h2>
      </div>
      <div className="discover-wrapper scroll-wrapper pb-5">
        <DiscoverItem id={597891} />
        <DiscoverItem id={619297} />
      </div>
    </div>
  );
}
