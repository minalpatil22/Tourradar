import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filteredData } = this.props;
    return (
      <Grid stackable>
        {filteredData.map(d => (
          <Grid.Row>
            <Grid.Column width={6} className="imageContainer">
              <LazyLoadImage effect="blur" src={d.tour_image} />
              <LazyLoadImage effect="blur" src={d.map_image} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={10} className='tour-details-container'>
                    <h3 className="tourtitle">{d.tour_name} </h3>
                    <p className='description-container'>{d.description}</p>

                    <div className="tour-details">
                      <Grid stackable>
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <p className="label">Destinations</p>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <p>{d.destinations.join(", ")}</p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <p className="label">Starts / Ends in</p>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <p>{`${d.destinations[0]} / ${
                              d.destinations[d.destinations.length - 1]
                            }`}</p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <p className="label">Age Range</p>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <p>{`${d.age_from} to ${d.age_to}`}</p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <p className="label">Country</p>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <p>{d.country}</p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <p className="label">Operator</p>
                          </Grid.Column>
                          <Grid.Column width={10} >
                          <p>{d.tour_operator}</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Grid>
                      <Grid.Row className='saving-container'>
                        <Grid.Column width={8}>
                          <p>Our Saving</p>
                          <p className='currency'>{`€ ${d.saving}`}</p>
                        </Grid.Column>
                        <Grid.Column width={8} className='fromDate'>
                          <p>From</p>
                          <p className='currency'>{`€ ${d.price}`}</p>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row className='days-container'>
                        <Grid.Column width={16}>{d.length} Days</Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    );
  }
}

export default ResultContainer;
