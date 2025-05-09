from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ProveedorViewSet, OrdenCompraViewSet

router = DefaultRouter()
router.register(r'proveedores', ProveedorViewSet)
router.register(r'ordenes-compra', OrdenCompraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
