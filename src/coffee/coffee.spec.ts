import { Test, TestingModule } from '@nestjs/testing';
import { Coffee } from './coffee';

describe('Coffee', () => {
  let provider: Coffee;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Coffee],
    }).compile();

    provider = module.get<Coffee>(Coffee);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
