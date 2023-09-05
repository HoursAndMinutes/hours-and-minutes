//TO DO: Loop through all watches
//Add edit button for each (put request)
//Add delete button for each (delete request, are you sure?)
import {useState, useEffect} from "react"

const AdminWatchList = () => {
  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    const fetchWatches = async () => {
      const result = await fetch("./api/watches")
      const data = await result.json()
      setWatchList(data)
    }
    fetchWatches()
  }, [])

  const handleDelete = async (watchId) => {
    const response = await fetch(`/api/users/admin/deletewatch/${watchId}`, {
      method: "DELETE",
    });
    if (response.ok) setWatchList(watchList.filter(watch => watch.id !== watchId))
  }

  return (
      <section>
          <h2>All Watches</h2>
          {
            watchList.map((watch) => (
              <ul key={watch.id}>
                <li>Name: {watch.name}</li>
                <li>Brand: {watch.brand}</li>
                <li>Price: ${watch.price}</li>
                <button>Edit</button>
                <button onClick={() => handleDelete(watch.id)}>Delete</button>
              </ul>
            ))
          }
      </section>
  )
}

export default AdminWatchList;