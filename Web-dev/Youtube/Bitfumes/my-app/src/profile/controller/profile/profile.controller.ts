import { Controller, Get } from '@nestjs/common';
import { ProfileService } from 'src/profile/service/profile/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get()
  profile() {
    return this.profileService.profile();
  }
}
