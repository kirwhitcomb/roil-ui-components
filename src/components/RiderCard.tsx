
type RiderCardProps = {
  username: string;
  following: boolean;
};

export function RiderCard({
  username,
  following
}: RiderCardProps) {
  return (
    <article className="rider-card">
      <div className="avatar" aria-hidden="true">
        TR
      </div>

      <div>
        <p className="eyebrow">RIDER PROFILE · DEMO</p>
        <h3>Trail Rider</h3>
        <p>@{username}</p>
        <p>{following ? "Following" : "Not following"}</p>
      </div>
    </article>
  );
}
