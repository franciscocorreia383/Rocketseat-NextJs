import { Title } from '../styles/pages/Home'
import { useEffect, useState } from 'react'

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {

  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      })
    });
  }, []);

  return (
    <div>
      <Title>Hello</Title>

      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return(
              <li
                key={recommendedProduct.id}
              >
              {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
