import React, { useState } from 'react'
import MyMapComponent from '../Components/map';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

function Location() {
    const [coordinates, setCoordinates] = useState({
        latitude: 21.961946,
        longitude: 70.792297
    })
    console.log(coordinates);

    return (
        <>
            <Form className='d-flex justify-content-evenly m-3'>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Latitude</Label>
                    <Input
                        type="number"
                        name="latitude"
                        value={coordinates.latitude}
                        onChange={(e) => setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) })} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Longitude</Label>
                    <Input
                        type="number"
                        name="longitude"
                        value={coordinates.longitude}
                        onChange={(e) => setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) })} />
                </FormGroup>
            </Form>

            <div
                style={{ width: `100vw`, height: `80vh` }}
                className="container">
                <MyMapComponent
                    coordinates={coordinates}
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </>
    )
}

export default Location
