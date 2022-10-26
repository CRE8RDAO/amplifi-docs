---
title: "Protocol fees"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---


## Fee Distribution
Fees are distributed to veCRV holders via the FeeDistributor contract. The contract is deployed to the Ethereum mainnet at:

0xA464e6DCda8AC41e03616F95f4BC98a13b8922Dc

Source code for this contract is available on Github.

Fees are distributed weekly. The porportional amount of fees that each user is to receive is calculated based on their veCRV balance relative to the total veCRV supply. This amount is calculated at the start of the week. The actual distribution occurs at the end of the week based on the fees that were collected. As such, a user that creates a new vote-lock should expect to receive their first fee payout at the end of the following epoch week.

The available 3CRV balance to distribute is tracked via the “token checkpoint”. This is updated at minimum every 24 hours. Fees that are received between the last checkpoint of the previous week and first checkpoint of the new week will be split evenly between the weeks.

```
FeeDistributor.claim(addr: address = msg.sender)→ uint256: nonpayable
```

Claims fees for an account.

`addr`: The address to claim for. If none is given, defaults to the caller.

Returns the amount of 3CRV received in the claim. For off-chain integrators, this function can be called as though it were a view method in order to check the claimable amount.

Note

Every veCRV related action (locking, extending a lock, increasing the locktime) increments a user’s veCRV epoch. A call to claim will consider at most 50 user epochs. For accounts that performed many veCRV actions, it may be required to call claim more than once to receive the fees. In such cases it can be more efficient to use claim_many.




```
distro = Contract("0xA464e6DCda8AC41e03616F95f4BC98a13b8922Dc")
distro.claim.call({'from': alice})
1323125068357710082803

```

// something here

```
distro.claim({'from': alice})
Transaction sent: 0xa7978a8d7fb185d9194bd3c2fa1801ddd57ad4edcfcaff7b5dab1c9101b78cf9
  Gas price: 92.0 gwei   Gas limit: 256299   Nonce: 42

```
--

```
FeeDistributor.claim_many(receivers: address[20])→ bool: nonpayable
```
Perform multiple claims in a single call.

`receivers`: An array of address to claim for. Claiming terminates at the first `ZERO_ADDRESS`.

This is useful to claim for multiple accounts at once, or for making many claims against the same account if that account has performed more than 50 veCRV related actions.

Returns `True`.
