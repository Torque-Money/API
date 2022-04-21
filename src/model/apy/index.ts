// **** This is what we are going to use to route strategies to their respective APY's and such
// **** Each way of getting the API will need a different function (call to the beefy API) - therefore we need a way of routing it here

import { beefySpookyFTMUSDCLP } from "./strategies/BeefyLP";

// **** It is probably going to require multiple levels to search for this - we will dedicate each part to a specific part that will export all of its members and then we will search

export default {
    "0x6Ad07E659563490d40377a98a7f0f62ed7d38C41": beefySpookyFTMUSDCLP,
};
