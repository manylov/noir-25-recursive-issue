# issue with noir 0.25 recursive proof

i used noir-examples repo resursion example

i cloned packages/noir/main folder into main-2

i added #[recursive] artifact to the both main circuits

i edited packages/noir/recursion circuit to add proof_2 as main function argument and to add second
std::verify_proof block

i edites packages/hardhat/test/index.test.ts to prepare test for this case

## issue

When i run yarn test, using modified function

```rust
fn main(
    verification_key: [Field; 114],
    proof: [Field; 93],
    proof_2: [Field; 93],
    public_inputs: [Field; 1],
    key_hash: Field
) {
    std::verify_proof(
        verification_key.as_slice(),
        proof.as_slice(),
        public_inputs.as_slice(),
        key_hash
    );

    std::verify_proof(
        verification_key.as_slice(),
        proof_2.as_slice(),
        public_inputs.as_slice(),
        key_hash
    );
}
```

i got error:

```
1) It compiles noir program code, receiving circuit bytes and abi object.
       Recursive flow
         Proof generation
           Should generate a final proof with a recursive input:
     RuntimeError: unreachable
      at wasm://wasm/01fd9442:wasm-function[17622]:0x78a386
      at wasm://wasm/01fd9442:wasm-function[223]:0x31f23
      at wasm://wasm/01fd9442:wasm-function[226]:0x320eb
      at wasm://wasm/01fd9442:wasm-function[8450]:0x348d89
      at wasm://wasm/01fd9442:wasm-function[8449]:0x348b72
      at wasm://wasm/01fd9442:wasm-function[8453]:0x348f76
      at wasm://wasm/01fd9442:wasm-function[8457]:0x34927d
      at wasm://wasm/01fd9442:wasm-function[8384]:0x345895
      at wasm://wasm/01fd9442:wasm-function[7659]:0x2905e3
      at wasm://wasm/01fd9442:wasm-function[7761]:0x293211

```

## Additional info

If i remove first or second std::verify_proof (and it's proof/proof_2 function argument), tests are
passed.
