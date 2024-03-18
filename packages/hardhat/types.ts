import { Noir } from '@noir-lang/noir_js';
import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { CompiledCircuit, ProofData } from '@noir-lang/types';

export type Circuits = {
  main: CompiledCircuit;
  main_2: CompiledCircuit;
  recursive: CompiledCircuit;
};

export type BackendInstances = {
  main: BarretenbergBackend;
  main_2: BarretenbergBackend;
  recursive: BarretenbergBackend;
};

export type Noirs = {
  main: Noir;
  main_2: Noir;
  recursive: Noir;
};

export interface ProofArtifacts extends ProofData {
  proofAsFields: string[];
  vkAsFields: string[];
  vkHash: string;
}
