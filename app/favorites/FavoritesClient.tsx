import { Container } from "../components/Container";
import { Heading } from "../components/Heading";

import { SafeUser, SaveListing } from "../types";
import { ListingCard } from "../components/listings/ListingCard";

interface FavoritesClientProps {
  listings: SaveListing[];
  currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you've favorited." />
      <div
        className="
        mt-10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-8
      "
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};
export default FavoritesClient;
