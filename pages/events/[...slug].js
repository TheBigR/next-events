import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

function EventsByDate() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2019 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. please fix it.</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filterData || filteredEvents.length === 0) {
    return <p> No Events Found!</p>;
  }
  return (
    <div>
      <p>Filtered events</p>
    </div>
  );
}

export default EventsByDate;
