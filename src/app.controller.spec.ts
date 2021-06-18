import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('Testing AppController and AppService: ', () => {
  let appController: AppController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  describe('Endpoints with their functions:  ', () => {
    it('add/:note should return nothing, is an insert.', () => {
      expect(typeof appController.addNote('Testing note')).toBe("undefined");
    });

    it('/all endpoint should return an array of JSON with all the messages.', () => {
      const result = appController.all()
      expect(typeof result).toBe("object");
    });

    it('/:id should return an array with one JSON.', () => {
      const result = appController.one(1);
      expect(typeof result).toBe("object");
    });

    it('/markFavourite/:id should return nothing, is an update.', () => {
      expect(typeof appController.markFavourite(1)).toBe("undefined");
    });

    it('/favourites should return an array of JSON with \
    all the messages marked as favourites.', () => {
      expect(typeof appController.favourites()).toBe("object");
    });
  });
});
