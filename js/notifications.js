// Sistema de notificações reutilizável
class NotificationSystem {
    static show(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    static error(message) {
        this.show(message, 'error');
    }
    static success(message) {
        this.show(message, 'success');
    }
}
