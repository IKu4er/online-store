import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Col className="mt-2" md={2}>
                    <Card
                        style={{ cursor: 'pointer' }}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light '}
                        key={brand.id}
                        className={"p-3"}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    )
})

export default BrandBar