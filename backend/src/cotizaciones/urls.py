from rest_framework.routers import DefaultRouter
from .views import CotizacionViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'cotizaciones', CotizacionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
