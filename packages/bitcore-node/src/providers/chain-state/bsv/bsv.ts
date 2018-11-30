import { BCHStateProvider } from '../bch/bch';
import { CSP } from '../../../types/namespaces/ChainStateProvider';

export class BSVStateProvider extends BCHStateProvider {
  constructor(chain: string = 'BCH') {
    super(chain);
  }

  async getFee(params: CSP.GetEstimateSmartFeeParams) {
    const { chain, network, target } = params;
    return { feerate: await this.getRPC(chain, network).getEstimateFee(Number(target)) };
  }
}
