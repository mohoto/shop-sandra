import React, {useMemo} from 'react'
import {useQuery} from '@apollo/client'
import {GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY} from '../../lib/queries'
import Card from './Card'
import {useSelector} from 'react-redux'
import {selectFilters} from '../../redux/reducers/filtersSlice'
const styles = {
    gallery : {
      height: 'calc(100vh - 120px)', 
      overflow: 'scroll'
    }
}

// main
function Gallery() {

    const {category, filter} = useSelector(selectFilters);
    console.log('filters:', filter)
    console.log('category:', category)

    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {name: category}
    });
    
  const dataMemo = useMemo(() => {
    return {
      data
    }
  }, [data]);
    //const {loading, error, data} = useQuery(GET_PRODUCTS, {})

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data) return <p>Pas de data</p>;
      console.dir(data.category.products)
    return(
      <div className="col-md-8 order-md-2 col-lg-9">
        <div className="container-fluid" style={styles.gallery}>
          <div className="row">
              {data.category.products.map((product, index) =>(
                // <Card {...product} />
                <Card key={index} product={product} />
          
              ))}
          </div>
        </div>
      </div>
    )};
  export default Gallery;