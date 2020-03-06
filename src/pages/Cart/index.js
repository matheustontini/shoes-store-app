import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
           <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>PRODUCT</th>
                    <th>AMOUNT</th>
                    <th>SUBTOTAL</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png?w=500&h=500&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg" alt="Shoes" />
                    </td>
                    <td>
                        <strong>Cool shoes</strong>
                        <span>$129.00</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1" />
                            </button>
                            <input type="number" readOnly value={2} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>
                            $258.00
                        </strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#7159c1" />
                        </button>
                    </td>
                </tr>
            </tbody>
           </ProductTable>

           <footer>
               <button type="button">Finish order</button>

               <Total>
                <span>TOTAL</span>
                <strong>$129.00</strong>
               </Total>
           </footer>
        </Container>
    )
}
