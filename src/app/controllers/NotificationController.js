import Notification from '../schemas/notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    // Check if given provider_id belongs to a provider
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401) // Unauthorized access status
        .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true } // Return updated field to user
    );

    return res.json(notification);
  }
}

export default new NotificationController();
