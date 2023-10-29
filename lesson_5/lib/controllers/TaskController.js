var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class TaskController {
    constructor(service) {
        this.getAllTasks = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getAllTasks();
            return response;
        });
        this.getTaskById = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getTaskById(id);
            return response;
        });
        this.deleteTaskById = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.deleteTaskById(id);
            return response;
        });
        this.addTask = (task) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.addTask(task);
            return response;
        });
        this.updateTaskById = (id, task) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.updateTaskById(id, task);
            return response;
        });
        this.service = service;
    }
}
//# sourceMappingURL=TaskController.js.map