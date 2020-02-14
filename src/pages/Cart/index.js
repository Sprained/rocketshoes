import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://cdnv2.moovin.com.br/belinhacalcados/imagens/produtos/det/tenis-actvitta-4801205-nylon-flat-marinho-905c64e2e93ac3d629209db088198209.png" alt="Tenis" />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$130,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$260,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color='7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar Pedido</button>

        <Total>
          <spam>TOTAL</spam>
          <strong>R1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
