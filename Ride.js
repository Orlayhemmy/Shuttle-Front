import { types, destroy } from 'mobx-state-tree';

const Ride = types.model('Ride', {
  pickup: types.string,
  destination: types.string,
  estimate: types.number,
  actual: types.number,
  approve: types.boolean,
});

const RideList = types.model('Rides', {
  rides: types.array(Ride)
})
.actions(self => ({
  addRide(ride) {
    self.rides.push(ride)
  },
  removeRide(ride) {
    destroy(ride)
  },
  approveRide(ride) {}
}))
.create({
  rides: [{
    pickup: 'Epic Tower',
    destination: 'Home',
    estimate: 1500,
    actual: NaN
  }]
})

export default RideList;

